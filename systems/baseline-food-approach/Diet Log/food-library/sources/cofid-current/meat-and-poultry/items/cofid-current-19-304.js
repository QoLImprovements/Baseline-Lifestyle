/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples from different outlets, sauce not included",
  "id": "cofid-current-19-304",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweet and sour pork, battered, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 22.4,
    "energy_kcal": 240.0,
    "fat_g": 13.9,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 2.26,
    "magnesium_mg": 10.0,
    "omega3_g": 0.84,
    "phosphorus_mg": 109.0,
    "potassium_mg": 122.0,
    "protein_g": 7.8,
    "salt_g": 0.6225,
    "sat_fat_g": 2.33,
    "sodium_mg": 249.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-304",
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
