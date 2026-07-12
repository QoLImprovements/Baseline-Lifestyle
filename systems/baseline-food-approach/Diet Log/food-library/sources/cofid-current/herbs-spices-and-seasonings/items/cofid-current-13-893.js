/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "4 samples and calculation from dried",
  "id": "cofid-current-13-893",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Thyme, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 630.0,
    "carbs_g": 15.1,
    "energy_kcal": 95.0,
    "fat_g": 2.5,
    "fibre_g": 12.3,
    "folate_ug": 91.0,
    "iron_mg": 0.0,
    "magnesium_mg": 73.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 270.0,
    "protein_g": 3.0,
    "salt_g": 0.045,
    "sat_fat_g": 1.2,
    "sodium_mg": 18.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 125.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-893",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
