/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-874",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cinnamon, ground",
  "nutritionPerBasis": {
    "calcium_mg": 1002.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 1.2,
    "fibre_g": 53.1,
    "folate_ug": 6.0,
    "iron_mg": 8.32,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 431.0,
    "protein_g": 4.0,
    "salt_g": 0.025,
    "sat_fat_g": 0.35,
    "sodium_mg": 10.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 31.2
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-874",
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
