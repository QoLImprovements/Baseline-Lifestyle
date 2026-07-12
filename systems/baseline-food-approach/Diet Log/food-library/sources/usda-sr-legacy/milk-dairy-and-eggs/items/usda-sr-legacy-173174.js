/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "scoop",
  "description": "Beverages",
  "id": "usda-sr-legacy-173174",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Beverages, UNILEVER, SLIMFAST Shake Mix, high protein, whey powder, 3-2-1 Plan,",
  "nutritionPerBasis": {
    "calcium_mg": 1040.0,
    "carbs_g": 50.0,
    "energy_kcal": 1810.0,
    "fat_g": 13.5,
    "fibre_g": 18.2,
    "folate_ug": 385.0,
    "iron_mg": 24.8,
    "magnesium_mg": 473.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 563.0,
    "potassium_mg": 752.0,
    "protein_g": 27.9,
    "salt_g": 1.2375,
    "sat_fat_g": 1.33,
    "sodium_mg": 495.0,
    "sugar_g": 20.6,
    "vitamin_a_ug": 865.0,
    "vitamin_c_mg": 104.0,
    "vitamin_e_mg": 51.9,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173174",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
