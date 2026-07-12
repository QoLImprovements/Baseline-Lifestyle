/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "7 samples, 6 products",
  "id": "cofid-current-11-894",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, chapati, white",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 78.3,
    "energy_kcal": 345.0,
    "fat_g": 1.4,
    "fibre_g": 3.6,
    "folate_ug": 14.0,
    "iron_mg": 1.79,
    "magnesium_mg": 28.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 130.0,
    "potassium_mg": 189.0,
    "protein_g": 9.7,
    "salt_g": 0.005,
    "sat_fat_g": 0.35,
    "sodium_mg": 2.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-894",
  "state": "Unspecified",
  "subcategory": "AA",
  "tags": [
    "aa",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
