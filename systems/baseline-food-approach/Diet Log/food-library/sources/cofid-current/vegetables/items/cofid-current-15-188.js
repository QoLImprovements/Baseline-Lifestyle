/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-188",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lasagne, vegetable, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 12.4,
    "energy_kcal": 106.0,
    "fat_g": 4.6,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.9,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 230.0,
    "protein_g": 4.8,
    "salt_g": 0.275,
    "sat_fat_g": 2.2,
    "sodium_mg": 110.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 144.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-188",
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
