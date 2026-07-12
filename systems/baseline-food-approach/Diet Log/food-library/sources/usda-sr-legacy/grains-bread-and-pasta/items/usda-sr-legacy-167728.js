/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-167728",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, rice and apples, dry",
  "nutritionPerBasis": {
    "calcium_mg": 850.0,
    "carbs_g": 86.9,
    "energy_kcal": 1660.0,
    "fat_g": 2.4,
    "fibre_g": 3.0,
    "folate_ug": 19.0,
    "iron_mg": 37.0,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 423.0,
    "potassium_mg": 410.0,
    "protein_g": 6.7,
    "salt_g": 0.04,
    "sat_fat_g": 0.503,
    "sodium_mg": 16.0,
    "sugar_g": 3.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167728",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
