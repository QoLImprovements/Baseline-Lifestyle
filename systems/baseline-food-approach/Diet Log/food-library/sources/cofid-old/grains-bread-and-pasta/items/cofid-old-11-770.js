/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "14 samples, 6 products, including Kellogg's and own label",
  "id": "cofid-old-11-770",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, sultana bran, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 67.8,
    "energy_kcal": 296.0,
    "fat_g": 1.4,
    "fibre_g": 11.2,
    "folate_ug": 317.0,
    "iron_mg": 15.3,
    "magnesium_mg": 99.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 284.0,
    "potassium_mg": 595.0,
    "protein_g": 7.3,
    "salt_g": 1.3525,
    "sat_fat_g": 0.19,
    "sodium_mg": 541.0,
    "sugar_g": 29.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 50.0,
    "vitamin_e_mg": 6.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-770",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
