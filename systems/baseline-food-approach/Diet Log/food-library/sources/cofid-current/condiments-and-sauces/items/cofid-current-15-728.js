/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe, containing cauliflower, sweetcorn, parlsey, cheese, flour, oil, fat spread and water",
  "id": "cofid-current-15-728",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crumble, vegetable, with white sauce, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 20.8,
    "energy_kcal": 171.0,
    "fat_g": 7.9,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.73,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 234.0,
    "protein_g": 5.4,
    "salt_g": 0.37,
    "sat_fat_g": 2.66,
    "sodium_mg": 148.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-728",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "condiments-and-sauces",
    "dr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
