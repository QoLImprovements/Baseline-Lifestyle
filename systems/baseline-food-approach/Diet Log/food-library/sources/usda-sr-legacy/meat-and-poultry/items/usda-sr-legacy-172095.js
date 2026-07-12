/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-1-8-of-12-pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172095",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "slice-1-8-of-12-pizza",
      "kind": "unit",
      "label": "slice 1/8 of 12\" pizza"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "slice-1-8-of-14-pizza",
      "kind": "unit",
      "label": "slice 1/8 of 14\" pizza"
    }
  ],
  "name": "Pizza, meat topping, thick crust, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 30.8,
    "energy_kcal": 1140.0,
    "fat_g": 11.5,
    "fibre_g": 2.3,
    "folate_ug": 101.0,
    "iron_mg": 1.7,
    "magnesium_mg": 25.0,
    "omega3_g": 0.232,
    "phosphorus_mg": 209.0,
    "potassium_mg": 201.0,
    "protein_g": 11.8,
    "salt_g": 1.725,
    "sat_fat_g": 4.28,
    "sodium_mg": 690.0,
    "sugar_g": 3.88,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172095",
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
