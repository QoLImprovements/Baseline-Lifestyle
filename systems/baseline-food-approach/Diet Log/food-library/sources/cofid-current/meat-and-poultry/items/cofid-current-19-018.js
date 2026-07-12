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
  "id": "cofid-current-19-018",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bacon rashers, streaky, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 337.0,
    "fat_g": 26.9,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.8,
    "magnesium_mg": 20.0,
    "omega3_g": 0.39,
    "phosphorus_mg": 180.0,
    "potassium_mg": 330.0,
    "protein_g": 23.8,
    "salt_g": 4.2,
    "sat_fat_g": 9.8,
    "sodium_mg": 1680.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-018",
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
