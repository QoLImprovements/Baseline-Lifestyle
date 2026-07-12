/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-12-177",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Roquefort",
  "nutritionPerBasis": {
    "calcium_mg": 530.0,
    "carbs_g": 0.0,
    "energy_kcal": 375.0,
    "fat_g": 32.9,
    "fibre_g": 0.0,
    "folate_ug": 45.0,
    "iron_mg": 0.4,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 400.0,
    "potassium_mg": 91.0,
    "protein_g": 19.7,
    "salt_g": 4.175,
    "sat_fat_g": 20.7,
    "sodium_mg": 1670.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 297.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-177",
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
