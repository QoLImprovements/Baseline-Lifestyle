/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records and dissection of shop-bought samples, containing short crust pastry, carrots, broccoli, cheese, white sauce and onions",
  "id": "cofid-current-15-804",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan, vegetable, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 18.2,
    "energy_kcal": 229.0,
    "fat_g": 15.6,
    "fibre_g": 2.5,
    "folate_ug": 13.0,
    "iron_mg": 0.6,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 139.0,
    "protein_g": 5.3,
    "salt_g": 0.3925,
    "sat_fat_g": 6.68,
    "sodium_mg": 157.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 343.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 30.9
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-804",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
