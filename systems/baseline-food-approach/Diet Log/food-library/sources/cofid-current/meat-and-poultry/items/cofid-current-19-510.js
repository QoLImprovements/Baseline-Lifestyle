/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Average of frozen and chilled samples, thick and thin, 65-70% meat",
  "id": "cofid-current-19-510",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, pork, raw",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 9.6,
    "energy_kcal": 309.0,
    "fat_g": 25.0,
    "fibre_g": 2.8,
    "folate_ug": 13.0,
    "iron_mg": 0.9,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 175.0,
    "potassium_mg": 160.0,
    "protein_g": 11.9,
    "salt_g": 1.175,
    "sat_fat_g": 9.15,
    "sodium_mg": 470.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-510",
  "state": "Raw",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
