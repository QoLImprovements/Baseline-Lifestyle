/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 sub-samples, 2 from different establishments in each of 5 regions",
  "id": "cofid-current-11-922",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancakes (served with crispy duck), pancakes only, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 53.3,
    "energy_kcal": 305.0,
    "fat_g": 7.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.59,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 125.0,
    "protein_g": 7.8,
    "salt_g": 0.3025,
    "sat_fat_g": 0.0,
    "sodium_mg": 121.0,
    "sugar_g": 5.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-922",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
