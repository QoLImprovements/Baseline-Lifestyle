/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-18-551",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, shoulder steaks (collar), grilled, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 0.0,
    "energy_kcal": 292.0,
    "fat_g": 19.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.4,
    "magnesium_mg": 27.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 240.0,
    "potassium_mg": 390.0,
    "protein_g": 29.2,
    "salt_g": 0.35,
    "sat_fat_g": 7.49,
    "sodium_mg": 140.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-551",
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
