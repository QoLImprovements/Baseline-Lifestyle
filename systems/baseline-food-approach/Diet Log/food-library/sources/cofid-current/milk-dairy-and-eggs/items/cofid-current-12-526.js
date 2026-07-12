/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "8 samples, wedges/freshly grated",
  "id": "cofid-current-12-526",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Parmesan, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 1025.0,
    "carbs_g": 0.9,
    "energy_kcal": 415.0,
    "fat_g": 29.7,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.8,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 680.0,
    "potassium_mg": 152.0,
    "protein_g": 36.2,
    "salt_g": 1.65,
    "sat_fat_g": 19.25,
    "sodium_mg": 660.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 410.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-526",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
