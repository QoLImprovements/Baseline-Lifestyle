/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-199",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lentil roast, with egg, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 20.3,
    "energy_kcal": 141.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 2.7,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 270.0,
    "protein_g": 8.2,
    "salt_g": 0.675,
    "sat_fat_g": 0.6,
    "sodium_mg": 270.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 129.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-199",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
