/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Sausages",
  "id": "usda-fndds-2706203",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-sausage-7-8-dia-x-2-long",
      "kind": "unit",
      "label": "1 sausage (7/8\" dia x 2\" long)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-can-5-oz-yields",
      "kind": "unit",
      "label": "1 can (5 oz) yields"
    }
  ],
  "name": "Vienna sausage, canned",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 2.6,
    "energy_kcal": 230.0,
    "fat_g": 19.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.88,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 101.0,
    "protein_g": 10.5,
    "salt_g": 2.1975,
    "sat_fat_g": 7.12,
    "sodium_mg": 879.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706203",
  "state": "Canned",
  "subcategory": "Sausages",
  "tags": [
    "canned",
    "meat-and-poultry",
    "sausages"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
