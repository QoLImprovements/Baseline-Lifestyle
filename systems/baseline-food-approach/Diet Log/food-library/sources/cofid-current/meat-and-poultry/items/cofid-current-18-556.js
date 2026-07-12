/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "25 samples, 58% lean and 42% fat",
  "id": "cofid-current-18-556",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, belly joint/slices, grilled, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 320.0,
    "fat_g": 23.4,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.9,
    "magnesium_mg": 23.0,
    "omega3_g": 0.44,
    "phosphorus_mg": 220.0,
    "potassium_mg": 350.0,
    "protein_g": 27.4,
    "salt_g": 0.2425,
    "sat_fat_g": 8.23,
    "sodium_mg": 97.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-556",
  "state": "Grilled",
  "subcategory": "MAG",
  "tags": [
    "grilled",
    "mag",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
