/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "16 samples",
  "id": "cofid-current-19-509",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, pork, chilled, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 9.8,
    "energy_kcal": 294.0,
    "fat_g": 22.1,
    "fibre_g": 2.3,
    "folate_ug": 4.0,
    "iron_mg": 1.1,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 190.0,
    "protein_g": 14.5,
    "salt_g": 1.6,
    "sat_fat_g": 8.0,
    "sodium_mg": 640.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-509",
  "state": "Grilled",
  "subcategory": "MI",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
