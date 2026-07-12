/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated from raw, fried for 5-10 minutes. Nitrogen, fat and water analysed, 2011",
  "id": "cofid-current-13-501",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Onions, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 11.2,
    "energy_kcal": 95.0,
    "fat_g": 5.3,
    "fibre_g": 3.0,
    "folate_ug": 7.0,
    "iron_mg": 0.42,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 189.0,
    "protein_g": 1.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.62,
    "sodium_mg": 4.0,
    "sugar_g": 8.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 2.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-501",
  "state": "Fried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
