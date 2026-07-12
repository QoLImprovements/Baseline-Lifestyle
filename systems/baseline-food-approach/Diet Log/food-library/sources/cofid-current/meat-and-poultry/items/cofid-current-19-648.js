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
  "id": "cofid-current-19-648",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bacon rashers, middle, fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 350.0,
    "fat_g": 28.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.7,
    "magnesium_mg": 20.0,
    "omega3_g": 0.53,
    "phosphorus_mg": 210.0,
    "potassium_mg": 350.0,
    "protein_g": 23.4,
    "salt_g": 3.475,
    "sat_fat_g": 9.8,
    "sodium_mg": 1390.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-648",
  "state": "Fried",
  "subcategory": "MAA",
  "tags": [
    "fried",
    "maa",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
