/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "7 samples, 5 brands, including Jordans's Country Crisp, Kellogg's Crunchy Nut Clusters and own labels",
  "id": "cofid-current-11-939",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, crunchy/crispy muesli type cereal, with nuts, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 61.9,
    "energy_kcal": 450.0,
    "fat_g": 20.5,
    "fibre_g": 7.9,
    "folate_ug": 21.0,
    "iron_mg": 0.0,
    "magnesium_mg": 83.0,
    "omega3_g": 0.31,
    "phosphorus_mg": 245.0,
    "potassium_mg": 290.0,
    "protein_g": 8.4,
    "salt_g": 0.345,
    "sat_fat_g": 4.61,
    "sodium_mg": 138.0,
    "sugar_g": 23.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-939",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
