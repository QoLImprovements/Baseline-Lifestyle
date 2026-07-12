/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 18-557",
  "id": "cofid-current-18-558",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, belly joint/slices, raw, lean and fat, weighed with bone",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 238.0,
    "fat_g": 18.6,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.6,
    "magnesium_mg": 16.0,
    "omega3_g": 0.32,
    "phosphorus_mg": 150.0,
    "potassium_mg": 270.0,
    "protein_g": 17.6,
    "salt_g": 0.1875,
    "sat_fat_g": 6.67,
    "sodium_mg": 75.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-558",
  "state": "Raw",
  "subcategory": "MAG",
  "tags": [
    "mag",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
