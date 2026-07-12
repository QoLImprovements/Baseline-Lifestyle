/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-crushed",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172744",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "cracker-4-1-2-x-2-1-2-x-1-8",
      "kind": "unit",
      "label": "cracker (4-1/2\" x 2-1/2\" x 1/8\")"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "cracker-triple",
      "kind": "unit",
      "label": "cracker, triple"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Crackers, rye, wafers, plain",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 80.4,
    "energy_kcal": 1400.0,
    "fat_g": 0.9,
    "fibre_g": 22.9,
    "folate_ug": 45.0,
    "iron_mg": 5.94,
    "magnesium_mg": 121.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 334.0,
    "potassium_mg": 495.0,
    "protein_g": 9.6,
    "salt_g": 1.3925,
    "sat_fat_g": 0.108,
    "sodium_mg": 557.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172744",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
