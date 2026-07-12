/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "5 samples including American and Chinese style and hot and spicy ribs. 80-90% meat, chilled and frozen",
  "id": "cofid-current-19-264",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, spare ribs, 'barbecue style', meat only, retail, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 5.8,
    "energy_kcal": 281.0,
    "fat_g": 17.1,
    "fibre_g": 0.6,
    "folate_ug": 7.0,
    "iron_mg": 1.6,
    "magnesium_mg": 27.0,
    "omega3_g": 0.31,
    "phosphorus_mg": 220.0,
    "potassium_mg": 380.0,
    "protein_g": 26.3,
    "salt_g": 1.1,
    "sat_fat_g": 6.2,
    "sodium_mg": 440.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-264",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
