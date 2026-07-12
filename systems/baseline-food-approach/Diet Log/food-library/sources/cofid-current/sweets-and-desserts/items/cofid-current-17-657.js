/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "9 samples, 7 products, including Twix and equivalent (or 'similar') products",
  "id": "cofid-current-17-657",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate covered caramel and biscuit fingers",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 70.0,
    "energy_kcal": 495.0,
    "fat_g": 23.6,
    "fibre_g": 2.5,
    "folate_ug": 4.0,
    "iron_mg": 1.62,
    "magnesium_mg": 30.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 118.0,
    "potassium_mg": 242.0,
    "protein_g": 5.0,
    "salt_g": 0.4775,
    "sat_fat_g": 13.52,
    "sodium_mg": 191.0,
    "sugar_g": 45.4,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-657",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "sea",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
