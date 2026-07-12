/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, all imported. Cut into wedges, coated with 1.5-2 tbsp oil and roasted for 30-45 minutes",
  "id": "cofid-current-13-647",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweet potato, wedges, flesh and skin, baked in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 24.7,
    "energy_kcal": 139.0,
    "fat_g": 3.9,
    "fibre_g": 5.2,
    "folate_ug": 11.0,
    "iron_mg": 1.0,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 701.0,
    "protein_g": 2.9,
    "salt_g": 0.1725,
    "sat_fat_g": 0.43,
    "sodium_mg": 69.0,
    "sugar_g": 18.8,
    "vitamin_a_ug": 855.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-647",
  "state": "Baked",
  "subcategory": "DG",
  "tags": [
    "baked",
    "dg",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
