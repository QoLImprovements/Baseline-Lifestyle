/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "15 samples, 8 products, including Kellogg's and own brands",
  "id": "cofid-current-11-763",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, bran flakes, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 73.3,
    "energy_kcal": 333.0,
    "fat_g": 2.2,
    "fibre_g": 13.4,
    "folate_ug": 367.0,
    "iron_mg": 13.5,
    "magnesium_mg": 121.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 357.0,
    "potassium_mg": 480.0,
    "protein_g": 9.6,
    "salt_g": 0.9,
    "sat_fat_g": 0.31,
    "sodium_mg": 360.0,
    "sugar_g": 21.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 8.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-763",
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
