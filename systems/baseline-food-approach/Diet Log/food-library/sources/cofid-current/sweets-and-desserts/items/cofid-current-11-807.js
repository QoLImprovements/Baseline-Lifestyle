/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products, including milk and plain chocolate",
  "id": "cofid-current-11-807",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, digestive, half coated in chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 61.8,
    "energy_kcal": 488.0,
    "fat_g": 25.7,
    "fibre_g": 2.1,
    "folate_ug": 7.0,
    "iron_mg": 2.14,
    "magnesium_mg": 37.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 124.0,
    "potassium_mg": 258.0,
    "protein_g": 6.3,
    "salt_g": 0.8775,
    "sat_fat_g": 12.68,
    "sodium_mg": 351.0,
    "sugar_g": 24.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-807",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
