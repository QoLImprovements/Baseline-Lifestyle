/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "LGC; 10 cans, 3 brands",
  "id": "cofid-current-13-579",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Baked beans, canned in tomato sauce, with pork sausages",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 11.0,
    "energy_kcal": 98.0,
    "fat_g": 4.5,
    "fibre_g": 3.3,
    "folate_ug": 16.0,
    "iron_mg": 1.5,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 250.0,
    "protein_g": 6.0,
    "salt_g": 0.65,
    "sat_fat_g": 0.0,
    "sodium_mg": 260.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-579",
  "state": "Baked",
  "subcategory": "DB",
  "tags": [
    "baked",
    "db",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
