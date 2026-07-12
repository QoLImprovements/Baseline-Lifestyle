/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "9 samples; smoked and unsmoked, loose and prepacked British and Danish bacon",
  "id": "cofid-current-19-649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bacon rashers, middle, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 241.0,
    "fat_g": 20.0,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.4,
    "magnesium_mg": 16.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 160.0,
    "potassium_mg": 260.0,
    "protein_g": 15.2,
    "salt_g": 2.625,
    "sat_fat_g": 7.3,
    "sodium_mg": 1050.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-649",
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
