/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "18 samples, coated in seasoned flour",
  "id": "cofid-current-18-416",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Liver, ox, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 3.6,
    "energy_kcal": 198.0,
    "fat_g": 9.5,
    "fibre_g": 0.0,
    "folate_ug": 290.0,
    "iron_mg": 7.8,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 380.0,
    "potassium_mg": 250.0,
    "protein_g": 24.8,
    "salt_g": 0.275,
    "sat_fat_g": 3.5,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17560.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-416",
  "state": "Unspecified",
  "subcategory": "MG",
  "tags": [
    "meat-and-poultry",
    "mg",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
