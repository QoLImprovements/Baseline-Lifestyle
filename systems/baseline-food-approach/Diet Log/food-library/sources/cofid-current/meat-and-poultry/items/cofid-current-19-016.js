/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples; smoked and unsmoked, loose and prepacked British and Danish bacon",
  "id": "cofid-current-19-016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bacon rashers, streaky, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 276.0,
    "fat_g": 23.6,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.5,
    "magnesium_mg": 15.0,
    "omega3_g": 0.37,
    "phosphorus_mg": 140.0,
    "potassium_mg": 250.0,
    "protein_g": 15.8,
    "salt_g": 3.15,
    "sat_fat_g": 8.2,
    "sodium_mg": 1260.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-016",
  "state": "Raw",
  "subcategory": "MAA",
  "tags": [
    "maa",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
