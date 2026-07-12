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
  "id": "cofid-current-12-583",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Instant dessert powder, made up with skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 14.4,
    "energy_kcal": 96.0,
    "fat_g": 3.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.11,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 193.0,
    "potassium_mg": 144.0,
    "protein_g": 3.3,
    "salt_g": 0.5725,
    "sat_fat_g": 2.89,
    "sodium_mg": 229.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-583",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
