/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products, chilled",
  "id": "cofid-current-18-524",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, loin steaks, grilled, lean",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 194.0,
    "fat_g": 5.9,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.62,
    "magnesium_mg": 33.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 262.0,
    "potassium_mg": 453.0,
    "protein_g": 35.1,
    "salt_g": 0.1425,
    "sat_fat_g": 2.15,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-524",
  "state": "Grilled",
  "subcategory": "MAG",
  "tags": [
    "grilled",
    "mag",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
