/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-773",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese sauce, made with skimmed milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 250.0,
    "carbs_g": 9.1,
    "energy_kcal": 172.0,
    "fat_g": 11.6,
    "fibre_g": 0.2,
    "folate_ug": 7.0,
    "iron_mg": 0.2,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 184.0,
    "potassium_mg": 167.0,
    "protein_g": 8.2,
    "salt_g": 0.5375,
    "sat_fat_g": 7.23,
    "sodium_mg": 215.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 135.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.37
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-773",
  "state": "Unspecified",
  "subcategory": "WCD",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "wcd"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
