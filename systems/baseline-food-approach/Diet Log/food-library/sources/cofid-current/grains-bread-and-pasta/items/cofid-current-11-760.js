/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "9 samples, 6 products, including Special K and own brand",
  "id": "cofid-current-11-760",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, malted flake, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 83.4,
    "energy_kcal": 373.0,
    "fat_g": 1.4,
    "fibre_g": 3.0,
    "folate_ug": 300.0,
    "iron_mg": 0.0,
    "magnesium_mg": 46.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 174.0,
    "potassium_mg": 216.0,
    "protein_g": 11.8,
    "salt_g": 0.95,
    "sat_fat_g": 0.27,
    "sodium_mg": 380.0,
    "sugar_g": 17.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 134.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-760",
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
