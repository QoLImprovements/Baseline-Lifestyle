/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-5-servings-per-22-85-oz-package",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170715",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "serving-5-servings-per-22-85-oz-package",
      "kind": "unit",
      "label": "serving 5 servings per 22.85 oz package"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "serving-5-servings-per-24-2-oz-package",
      "kind": "unit",
      "label": "serving 5 servings per 24.2 oz package"
    },
    {
      "gramsPerUnit": 713.0,
      "key": "package-24-2-oz-pizza",
      "kind": "unit",
      "label": "package 24.2 oz pizza"
    },
    {
      "gramsPerUnit": 354.0,
      "key": "package-10-9-oz-pizza",
      "kind": "unit",
      "label": "package 10.9 oz pizza"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "serving-2-servings-per-10-9-oz-package",
      "kind": "unit",
      "label": "serving 2 servings per 10.9 oz package"
    },
    {
      "gramsPerUnit": 644.0,
      "key": "package-22-85-oz-pizza",
      "kind": "unit",
      "label": "package 22.85 oz pizza"
    }
  ],
  "name": "Pizza, meat and vegetable topping, regular crust, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 25.1,
    "energy_kcal": 1150.0,
    "fat_g": 14.4,
    "fibre_g": 2.2,
    "folate_ug": 34.0,
    "iron_mg": 1.36,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 181.0,
    "potassium_mg": 209.0,
    "protein_g": 11.3,
    "salt_g": 1.3875,
    "sat_fat_g": 5.08,
    "sodium_mg": 555.0,
    "sugar_g": 4.85,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 8.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170715",
  "state": "Frozen",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "frozen",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
