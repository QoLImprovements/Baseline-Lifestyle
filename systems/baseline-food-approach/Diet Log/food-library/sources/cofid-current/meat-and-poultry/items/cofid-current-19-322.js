/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "50 samples, 10 each of Korma, Tikka Masala, Dhansak, Jalfrezi and Dopiaza. Meat and sauce only",
  "id": "cofid-current-19-322",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chicken, average, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 2.5,
    "energy_kcal": 145.0,
    "fat_g": 9.8,
    "fibre_g": 2.2,
    "folate_ug": 0.0,
    "iron_mg": 2.32,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 218.0,
    "protein_g": 11.7,
    "salt_g": 0.89,
    "sat_fat_g": 2.87,
    "sodium_mg": 356.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-322",
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
