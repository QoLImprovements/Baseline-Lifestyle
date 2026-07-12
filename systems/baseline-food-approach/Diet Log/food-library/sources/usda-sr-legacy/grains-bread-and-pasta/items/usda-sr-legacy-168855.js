/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cake",
  "description": "Snacks",
  "id": "usda-sr-legacy-168855",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "cake",
      "kind": "unit",
      "label": "cake"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "2-cakes",
      "kind": "unit",
      "label": "2 cakes"
    }
  ],
  "name": "Snacks, rice cakes, brown rice, rye",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 79.9,
    "energy_kcal": 1620.0,
    "fat_g": 3.8,
    "fibre_g": 4.0,
    "folate_ug": 5.0,
    "iron_mg": 1.8,
    "magnesium_mg": 144.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 380.0,
    "potassium_mg": 311.0,
    "protein_g": 8.1,
    "salt_g": 0.275,
    "sat_fat_g": 0.58,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168855",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "grains-bread-and-pasta",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
