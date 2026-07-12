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
  "id": "usda-sr-legacy-169040",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "2-biscuits-1-nlea-serving",
      "kind": "unit",
      "label": "2 biscuits (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, WEETABIX whole grain cereal",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 81.5,
    "energy_kcal": 1550.0,
    "fat_g": 2.86,
    "fibre_g": 11.4,
    "folate_ug": 46.0,
    "iron_mg": 12.9,
    "magnesium_mg": 92.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 172.0,
    "potassium_mg": 429.0,
    "protein_g": 11.4,
    "salt_g": 0.9275,
    "sat_fat_g": 0.48,
    "sodium_mg": 371.0,
    "sugar_g": 5.71,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169040",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
