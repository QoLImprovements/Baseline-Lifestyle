/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "7 samples, 5 brands, including Jordans Country Crisp, Quaker Oat granola and own brand",
  "id": "cofid-current-11-938",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, crunchy clusters type, without nuts, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 71.0,
    "energy_kcal": 399.0,
    "fat_g": 11.6,
    "fibre_g": 7.2,
    "folate_ug": 90.0,
    "iron_mg": 2.68,
    "magnesium_mg": 72.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 232.0,
    "potassium_mg": 310.0,
    "protein_g": 7.2,
    "salt_g": 0.1025,
    "sat_fat_g": 4.15,
    "sodium_mg": 41.0,
    "sugar_g": 25.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-938",
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
