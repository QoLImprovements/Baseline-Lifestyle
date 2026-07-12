/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products, chilled",
  "id": "cofid-current-18-512",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, leg joint, raw, lean",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 122.0,
    "fat_g": 3.3,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.64,
    "magnesium_mg": 26.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 205.0,
    "potassium_mg": 377.0,
    "protein_g": 23.1,
    "salt_g": 0.14,
    "sat_fat_g": 1.1,
    "sodium_mg": 56.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-512",
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
