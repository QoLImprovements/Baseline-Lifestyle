/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "16 samples, English and French",
  "id": "cofid-current-12-357",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, goats milk, full fat, soft, white rind",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 1.0,
    "energy_kcal": 320.0,
    "fat_g": 25.8,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.0,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 229.0,
    "potassium_mg": 132.0,
    "protein_g": 21.1,
    "salt_g": 1.5025,
    "sat_fat_g": 17.91,
    "sodium_mg": 601.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 333.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-357",
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
