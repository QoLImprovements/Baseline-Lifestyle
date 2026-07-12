/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174626",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "0-5-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.5 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Oat Bran, QUAKER/MOTHER'S Oat Bran, dry",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 62.9,
    "energy_kcal": 364.0,
    "fat_g": 7.97,
    "fibre_g": 14.3,
    "folate_ug": 38.0,
    "iron_mg": 8.07,
    "magnesium_mg": 241.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 694.0,
    "potassium_mg": 579.0,
    "protein_g": 17.0,
    "salt_g": 0.0125,
    "sat_fat_g": 1.43,
    "sodium_mg": 5.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174626",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
