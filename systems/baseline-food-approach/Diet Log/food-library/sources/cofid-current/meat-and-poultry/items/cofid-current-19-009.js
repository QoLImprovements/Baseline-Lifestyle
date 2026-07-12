/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "6 samples; smoked and unsmoked, loose and prepacked British and Danish bacon",
  "id": "cofid-current-19-009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bacon rashers, back, reduced salt, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 282.0,
    "fat_g": 20.6,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.7,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 340.0,
    "protein_g": 24.1,
    "salt_g": 2.825,
    "sat_fat_g": 7.8,
    "sodium_mg": 1130.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-009",
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
