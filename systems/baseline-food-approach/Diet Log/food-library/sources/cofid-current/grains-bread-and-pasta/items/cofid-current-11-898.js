/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "4 samples, 3 products",
  "id": "cofid-current-11-898",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, soya",
  "nutritionPerBasis": {
    "calcium_mg": 182.0,
    "carbs_g": 18.7,
    "energy_kcal": 409.0,
    "fat_g": 22.4,
    "fibre_g": 18.0,
    "folate_ug": 245.0,
    "iron_mg": 8.42,
    "magnesium_mg": 245.0,
    "omega3_g": 1.43,
    "phosphorus_mg": 668.0,
    "potassium_mg": 1867.0,
    "protein_g": 34.3,
    "salt_g": 0.0025,
    "sat_fat_g": 2.74,
    "sodium_mg": 1.0,
    "sugar_g": 6.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.33,
    "vitamin_k_ug": 25.3
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-898",
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
