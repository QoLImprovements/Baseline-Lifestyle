/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-167724",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Millet, puffed",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 80.0,
    "energy_kcal": 354.0,
    "fat_g": 3.4,
    "fibre_g": 2.7,
    "folate_ug": 79.0,
    "iron_mg": 2.81,
    "magnesium_mg": 106.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 266.0,
    "potassium_mg": 40.0,
    "protein_g": 13.0,
    "salt_g": 0.0125,
    "sat_fat_g": 0.67,
    "sodium_mg": 5.0,
    "sugar_g": 0.55,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167724",
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
