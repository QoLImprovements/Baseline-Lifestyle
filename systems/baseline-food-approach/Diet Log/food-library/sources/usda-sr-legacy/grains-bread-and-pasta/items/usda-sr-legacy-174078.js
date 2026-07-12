/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Bread, roll, Mexican, bollilo",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 55.8,
    "energy_kcal": 318.0,
    "fat_g": 5.8,
    "fibre_g": 2.2,
    "folate_ug": 127.0,
    "iron_mg": 3.9,
    "magnesium_mg": 30.0,
    "omega3_g": 0.047,
    "phosphorus_mg": 111.0,
    "potassium_mg": 131.0,
    "protein_g": 10.6,
    "salt_g": 1.265,
    "sat_fat_g": 1.4,
    "sodium_mg": 506.0,
    "sugar_g": 3.55,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 10.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174078",
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
