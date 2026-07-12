/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, chilled",
  "id": "cofid-current-18-518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, loin medallions, raw, lean",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 116.0,
    "fat_g": 1.9,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.43,
    "magnesium_mg": 27.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 215.0,
    "potassium_mg": 405.0,
    "protein_g": 24.8,
    "salt_g": 0.1025,
    "sat_fat_g": 0.65,
    "sodium_mg": 41.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-518",
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
