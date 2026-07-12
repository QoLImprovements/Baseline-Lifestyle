/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "7 samples, 6 brands, made with whole milk",
  "id": "cofid-current-12-555",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, Greek style, plain",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 4.8,
    "energy_kcal": 133.0,
    "fat_g": 10.2,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.11,
    "magnesium_mg": 13.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 138.0,
    "potassium_mg": 184.0,
    "protein_g": 5.7,
    "salt_g": 0.165,
    "sat_fat_g": 6.75,
    "sodium_mg": 66.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 115.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-555",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "bn",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
