/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 samples; smoked and unsmoked, loose and prepacked Danish bacon",
  "id": "cofid-current-19-644",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bacon loin steaks, lean, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.1,
    "energy_kcal": 158.0,
    "fat_g": 4.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.6,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 370.0,
    "protein_g": 28.9,
    "salt_g": 2.475,
    "sat_fat_g": 1.55,
    "sodium_mg": 990.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-644",
  "state": "Grilled",
  "subcategory": "MAA",
  "tags": [
    "grilled",
    "maa",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
